import 'package:Scholarly/constants.dart';
import 'package:Scholarly/screens/nav_bar/components/nav_bar.dart';
import 'package:flutter/material.dart';
import 'package:Scholarly/routes.dart';
import 'package:Scholarly/screens/splash/splash_screen.dart';
import 'package:Scholarly/theme.dart';
import 'package:animated_theme_switcher/animated_theme_switcher.dart';

// void main() => runApp(MaterialApp(
//       debugShowCheckedModeBanner: false,
//       initialRoute: NavBar.routeName,
//       routes: routes,
//       theme: kDarkTheme,
//       // theme: theme(),
//     ));

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    final isPlatformDark =
        WidgetsBinding.instance.window.platformBrightness == Brightness.dark;
    final initTheme = isPlatformDark ? kDarkTheme : kLightTheme;
    return ThemeProvider(
      initTheme: initTheme,
      child: Builder(builder: (context) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          title: 'Flutter Demo',
          theme: kDarkTheme,
          // home: SplashScreen(),
          // We use routeName so that we dont need to remember the name
          initialRoute: NavBar.routeName,
          routes: routes,
        );
      }),
    );
  }
}
