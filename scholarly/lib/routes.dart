// import 'dart:js';

// import 'dart:js';

import 'package:Scholarly/screens/nav_bar/components/nav_bar.dart';
import 'package:flutter/widgets.dart';
import 'package:Scholarly/screens/complete_profile/complete_profile_screen.dart';
import 'package:Scholarly/screens/forgot_password/forgot_password_screen.dart';
import 'package:Scholarly/screens/home/home_screen.dart';
import 'package:Scholarly/screens/login_success/login_success_screen.dart';
import 'package:Scholarly/screens/sign_in/sign_in_screen.dart';
import 'package:Scholarly/screens/sign_in/sign_up/sign_up_screen.dart';
import 'package:Scholarly/screens/splash/splash_screen.dart';
import 'package:Scholarly/screens/saved/saved.dart';
import 'package:Scholarly/screens/profile/profile.dart';

// All our routes will be available here
final Map<String, WidgetBuilder> routes = {
  SplashScreen.routeName: (context) => SplashScreen(),
  SignInScreen.routeName: (context) => SignInScreen(),
  ForgotPasswordScreen.routeName: (context) => ForgotPasswordScreen(),
  LoginSuccessScreen.routeName: (context) => LoginSuccessScreen(),
  SignUpScreen.routeName: (context) => SignUpScreen(),
  CompleteProfileScreen.routeName: (context) => CompleteProfileScreen(),
  HomeScreen.routeName: (context) => HomeScreen(),
  SavedScreen.routeName: (context) => SavedScreen(),
  ProfileScreen.routeName: (context) => ProfileScreen(),
  NavBar.routeName: (context) => NavBar(),
};
