import 'dart:convert';
import 'package:http/http.dart' as http;

class RequestResult
{
  bool ok;
  dynamic data;
  RequestResult(this.ok, this.data);
}

const PROTOCOL = "http";
const DOMAIN = "192.168.0.20:8899";

Future<RequestResult> http_post(String route, [dynamic data])
async
{
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