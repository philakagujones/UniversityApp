import 'package:flutter/material.dart';

import 'components/body.dart';

class SavedScreen extends StatelessWidget {
  static String routeName = "/saved";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Saved"),
        automaticallyImplyLeading: false,
      ),
      body: Search(),
    );
  }
}
