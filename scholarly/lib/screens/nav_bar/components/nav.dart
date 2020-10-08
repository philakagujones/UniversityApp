import 'package:Scholarly/screens/home/home_screen.dart';
import 'package:Scholarly/screens/profile/profile.dart';
import 'package:Scholarly/screens/saved/saved.dart';
import 'package:Scholarly/screens/explore/explore.dart';
import 'package:Scholarly/screens/inbox/inbox.dart';
import 'package:flutter/material.dart';
import 'package:curved_navigation_bar/curved_navigation_bar.dart';

class BottomNavBar extends StatefulWidget {
  @override
  _BottomNavBarState createState() => _BottomNavBarState();
}

class _BottomNavBarState extends State<BottomNavBar> {
  int _page = 2;

  final _pageOption = [
    SavedScreen(),
    ExploreScreen(),
    HomeScreen(),
    InboxScreen(),
    ProfileScreen(),
  ];

  // GlobalKey _bottomNavigationKey = GlobalKey();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: CurvedNavigationBar(
        index: 2,
        height: 70.0,
        items: <Widget>[
          Icon(Icons.bookmark, size: 30),
          Icon(Icons.search, size: 30),
          Icon(Icons.home, size: 30),
          Icon(Icons.message, size: 30),
          Icon(Icons.person, size: 30),
        ],
        color: Colors.white10,
        backgroundColor: Colors.white10,
        buttonBackgroundColor: Colors.white70,
        animationCurve: Curves.easeInOut,
        onTap: (int index) {
          setState(() {
            _page = index;
          });
        },
      ),
      body: _pageOption[_page],
    );
  }
}
