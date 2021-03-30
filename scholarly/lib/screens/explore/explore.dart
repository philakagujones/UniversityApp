import 'package:flutter/material.dart';

import 'components/body.dart';

class ExploreScreen extends StatelessWidget {
  static String routeName = "/explore";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Explore"),
        automaticallyImplyLeading: false,
      ),
      body: Body(),
    );
  }
}
