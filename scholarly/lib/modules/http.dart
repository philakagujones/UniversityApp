import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class RequestResult
{
  bool ok;
  dynamic data;
  RequestResult(this.ok, this.data);
}

const PROTOCOL = "http";
const DOMAIN = "192.168.0.23:8899";
final storage = FlutterSecureStorage();

Future<RequestResult> http_get(String route, [dynamic data]) async
{
  var dataStr = json.encode(data);
  var url = "$PROTOCOL://$DOMAIN/$route?data=$dataStr";
  var result = await http.get(url);
  return RequestResult(true, json.decode(result.body));
}

Future<RequestResult> attempt_signup(String route, [dynamic data])
async{
  var url = "$PROTOCOL://$DOMAIN/$route";
  var dataStr = json.encode(data);
  var result = await http.post(url, body: dataStr, headers:{"Content-Type":"application/json"});
  if (result.statusCode == 200){
    print(json.decode(result.body));
  } else{
    print(result.statusCode);
  }
  return RequestResult(true, json.decode(result.body));
}

Future<RequestResult> attempt_login(String route, [dynamic data])
async{
  var url = "$PROTOCOL://$DOMAIN/$route";
  var dataStr = json.encode(data);
  var result = await http.post(url, body: dataStr, headers:{"Content-Type":"application/json"});
  if (result.statusCode == 200){
    print(json.decode(result.body));
  } else{
    print(result.statusCode);
  }
  return RequestResult(true, json.decode(result.body));
}