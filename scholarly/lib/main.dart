import 'package:Scholarly/screens/home/home_screen.dart';
import 'package:Scholarly/screens/login_success/login_success_screen.dart';
import 'package:Scholarly/screens/nav_bar/components/nav.dart';
import 'package:Scholarly/screens/nav_bar/components/nav_bar.dart';
import 'package:flutter/material.dart';
import 'package:Scholarly/routes.dart';
import 'package:Scholarly/screens/splash/splash_screen.dart';
import 'package:Scholarly/theme.dart';

void main() => runApp(MaterialApp(
      debugShowCheckedModeBanner: false,
<<<<<<< HEAD
      initialRoute: LoginSuccessScreen.routeName,
=======
      initialRoute: SplashScreen.routeName,
>>>>>>> 9f918f74d0d2fcbe011028ad4e89475991f7fd85
      // home: BottomNavBar(),
      routes: routes,
      theme: theme(),
    ));

// class MyApp extends StatelessWidget {
//  // This widget is the root of your application.
//  @override
// Widget build(BuildContext context) {
// return MaterialApp(
//  debugShowCheckedModeBanner: false,
//  title: 'Flutter Demo',
//  theme: theme(),
// home: SplashScreen(),
//  // We use routeName so that we dont need to remember the name
//  initialRoute: SplashScreen.routeName,
//  routes: routes,
// );
// }
// }
