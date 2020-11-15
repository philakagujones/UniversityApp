import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class RequestResult
{
  bool ok;
  dynamic data;
  RequestResult(this.ok, this.data);
}

const PROTOCOL = "http";
const DOMAIN = "10.0.0.145:8899";
final storage = new FlutterSecureStorage();


Future<RequestResult> get_data(String route, [dynamic data]) async
{
  var dataStr = json.encode(data);
  var url = "$PROTOCOL://$DOMAIN/$route?data=$dataStr";
  var result = await http.get(url, headers:{"Content-Type":"application/json"});
}


Future<RequestResult> verifyToken(String route, dynamic token)
async
{
  var url = "$PROTOCOL://$DOMAIN/$route";
  var verify = await http.get(url, headers: {'authorization': 'Bearer $token'});

  if (verify.statusCode == 201){
    print(json.decode(verify.body));
  } else{
    print(verify.statusCode);
    throw Exception(verify.statusCode);
  }
  return RequestResult(true, json.decode(verify.body));
}

Future<RequestResult> attempt_signup(String route,  [dynamic data])
async{
  var url = "$PROTOCOL://$DOMAIN/$route";
  var dataStr = json.encode(data);
  var result = await http.post(url, body: dataStr, headers:{"Content-Type":"application/json"});
  if (result.statusCode == 200){
    print(json.decode(result.body));
  } else{
    print(result.statusCode);
    throw Exception(result.statusCode);
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
    throw Exception(result.statusCode);
  }
  return RequestResult(true, json.decode(result.body));
}