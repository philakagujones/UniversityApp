import 'package:flutter/material.dart';

import 'nav.dart';

class NavBar extends StatelessWidget {
  static String routeName = "/nav";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: BottomNavBar(),
    );
  }
}
