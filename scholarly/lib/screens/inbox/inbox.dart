import 'package:flutter/material.dart';
import 'components/body.dart';

class InboxScreen extends StatelessWidget {
  static String routeName = "/inbox";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Inbox"),
        automaticallyImplyLeading: false,
      ),
      body: Body(),
    );
  }
}
