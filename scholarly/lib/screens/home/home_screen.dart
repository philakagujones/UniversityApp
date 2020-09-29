import 'package:Scholarly/screens/nav_bar/components/nav.dart';
import 'package:flutter/material.dart';

import 'components/body.dart';

class HomeScreen extends StatelessWidget {
  static String routeName = "/home";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Body(),
      // bottomNavigationBar: BottomNavBar(),
    );
  }
}
