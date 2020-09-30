import 'dart:convert';
import 'package:http/http.dart' as http;

class RequestResult
{
  bool ok;
  dynamic data;
  RequestResult(this.ok, this.data);
}

const PROTOCOL = "http";
const DOMAIN = "192.168.0.23:8899";

Future<RequestResult> http_get(String route, [dynamic data]) async
{
  var dataStr = jsonEncode(data);
  var url = "$PROTOCOL://$DOMAIN/$route?data=$dataStr";
  var result = await http.get(url);
  return RequestResult(true, jsonDecode(result.body));
}

Future<RequestResult> http_post(String route, [dynamic data])
async{
  var url = "$PROTOCOL://$DOMAIN/$route";
  var dataStr = jsonEncode(data);
  var result = await http.post(url, body: dataStr, headers:{"Content-Type":"application/json"});
  if (result.statusCode == 200){
    print(json.decode(result.body));
  } else{
    print(result.statusCode);
  }
  return RequestResult(true, jsonDecode(result.body));
}

Future<RequestResult> http_put(String route, [dynamic data])
async
{
  var url = "$PROTOCOL://$DOMAIN/$route";
  var dataStr = jsonEncode(data);
    var result = await http.put(url, body: dataStr, headers:{"Content-Type":"application/json"});
  if (result.statusCode == 200){
    print(json.decode(result.body));
  } else{
    print(result.statusCode);
  }
  return await RequestResult(true, jsonDecode(result.body));
}