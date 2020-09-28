import 'package:flutter/material.dart';
import 'package:curved_navigation_bar/curved_navigation_bar.dart';
import 'package:Scholarly/routes.dart';
import 'package:Scholarly/screens/splash/splash_screen.dart';
import 'package:Scholarly/theme.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: theme(),
      // home: SplashScreen(),
      // We use routeName so that we dont need to remember the name
      initialRoute: SplashScreen.routeName,
      routes: routes,
    );
  }
}

class BottomNavBar extends StatefulWidget {
  @override
  _BottomNavBarState createState() => _BottomNavBarState();
}

class _BottomNavBarState extends State<BottomNavBar> {
  int _page = 0;
  GlobalKey _bottomNavigationKey = GlobalKey();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
// start of bottom nav
        bottomNavigationBar: CurvedNavigationBar(
          key: _bottomNavigationKey,
          color: Colors.white10,
          backgroundColor: Colors.white10,
          buttonBackgroundColor: Colors.white70,
          items: <Widget>[
            Icon(Icons.bookmark, size: 30),
            Icon(Icons.home, size: 30),
            Icon(Icons.account_circle, size: 30),
          ],
          index: 1,
          onTap: (index) {
            setState(() {
              _page = index;
            });
          },
        ),
        body: Container(
          child: Center(
            child: Column(
              children: <Widget>[
                Text(_page.toString(), textScaleFactor: 10.0),
                RaisedButton(
                  child: Text('Go To Page of index 1'),
                  onPressed: () {
                    final CurvedNavigationBarState navBarState =
                        _bottomNavigationKey.currentState;
                    navBarState.setPage(1);
                  },
                )
              ],
            ),
          ),
        ));
  }
}
