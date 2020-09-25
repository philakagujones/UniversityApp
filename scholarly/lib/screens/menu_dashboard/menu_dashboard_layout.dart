import 'package:flutter/material.dart';

import './menu.dart';

class MenuDashboard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white,
        body: Stack(
          children: <Widget>[
            menu(context),
          ],
        ));
  }
}
