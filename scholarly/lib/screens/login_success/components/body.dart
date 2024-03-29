import 'package:Scholarly/screens/nav_bar/components/nav_bar.dart';
import 'package:flutter/material.dart';
import 'package:Scholarly/components/default_button.dart';
import 'package:Scholarly/screens/home/home_screen.dart';
import 'package:Scholarly/size_config.dart';

class Body extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(height: SizeConfig.screenHeight * 0.04),
        Image.asset(
          "assets/images/success.png",
          height: SizeConfig.screenHeight * 0.4, //40%
        ),
        SizedBox(height: SizeConfig.screenHeight * 0.08),
        Text(
          "Success",
          style: TextStyle(
            fontSize: getProportionateScreenWidth(30),
            fontWeight: FontWeight.bold,
            color: Colors.black,
          ),
        ),
        Spacer(),
        SizedBox(
          width: SizeConfig.screenWidth * 0.6,
          child: DefaultButton(
            text: "Continue Home",
            press: () {
              Navigator.pushNamed(context, NavBar.routeName);
            },
          ),
        ),
        Spacer(),
      ],
    );
  }
}
