class Property {
  String label;
  String name;
  String price;
  String location;
  String sqm;
  String review;
  String description;
  String frontImage;
  String ownerImage;
  List<String> images;

  Property(
      this.label,
      this.name,
      this.price,
      this.location,
      this.sqm,
      this.review,
      this.description,
      this.frontImage,
      this.ownerImage,
      this.images);
}

List<Property> getPropertyList() {
  return <Property>[
    Property(
      "RENT",
      "Clinton Villa",
      "6,800.00",
      "North Vancouver",
      "3,400",
      "4.4",
      "The living is easy in this impressive, generously proportioned contemporary residence with lake and ocean views, located within a level stroll to the sand and surf.",
      "assets/images/house_01.png",
      "assets/images/owner.png",
      [
        "assets/images/kitchen.jpg",
        "assets/images/bath_room.jpg",
        "assets/images/swimming_pool.jpg",
        "assets/images/bed_room.jpg",
        "assets/images/living_room.jpg",
      ],
    ),
    Property(
      "RENT",
      "Salu House",
      "2,600.00",
      "UBC",
      "844",
      "4.6",
      "The living is easy in this impressive, generously proportioned contemporary residence with lake and ocean views, located within a level stroll to the sand and surf.",
      "assets/images/house_02.png",
      "assets/images/owner.png",
      [
        "assets/images/kitchen.jpg",
        "assets/images/bath_room.jpg",
        "assets/images/swimming_pool.jpg",
        "assets/images/bed_room.jpg",
        "assets/images/living_room.jpg",
      ],
    ),
    Property(
      "RENT",
      "Hilton House",
      "2,900.00",
      "UBC (Nobel Park)",
      "969",
      "4.1",
      "The living is easy in this impressive, generously proportioned contemporary residence with lake and ocean views, located within a level stroll to the sand and surf.",
      "assets/images/house_03.png",
      "assets/images/owner.png",
      [
        "assets/images/kitchen.jpg",
        "assets/images/bath_room.jpg",
        "assets/images/swimming_pool.jpg",
        "assets/images/bed_room.jpg",
        "assets/images/living_room.jpg",
      ],
    ),
    Property(
      "RENT",
      "Ibe House",
      "2,000.00",
      "SFU Burnaby",
      "990",
      "4.5",
      "The living is easy in this impressive, generously proportioned contemporary residence with lake and ocean views, located within a level stroll to the sand and surf.",
      "assets/images/house_04.png",
      "assets/images/owner.png",
      [
        "assets/images/kitchen.jpg",
        "assets/images/bath_room.jpg",
        "assets/images/swimming_pool.jpg",
        "assets/images/bed_room.jpg",
        "assets/images/living_room.jpg",
      ],
    ),
    Property(
      "RENT",
      "Aventura",
      "1,500.00",
      "SFU Burnaby",
      "605",
      "4.2",
      "The living is easy in this impressive, generously proportioned contemporary residence with lake and ocean views, located within a level stroll to the sand and surf.",
      "assets/images/house_05.png",
      "assets/images/owner.png",
      [
        "assets/images/kitchen.jpg",
        "assets/images/bath_room.jpg",
        "assets/images/swimming_pool.jpg",
        "assets/images/bed_room.jpg",
        "assets/images/living_room.jpg",
      ],
    ),
    Property(
      "RENT",
      "North House",
      "1,650.00",
      "New West",
      "900",
      "4.0",
      "The living is easy in this impressive, generously proportioned contemporary residence with lake and ocean views, located within a level stroll to the sand and surf.",
      "assets/images/house_06.png",
      "assets/images/owner.png",
      [
        "assets/images/kitchen.jpg",
        "assets/images/bath_room.jpg",
        "assets/images/swimming_pool.jpg",
        "assets/images/bed_room.jpg",
        "assets/images/living_room.jpg",
      ],
    ),
    Property(
      "RENT",
      "Rasmus Resident",
      "1,550.00",
      "Burnaby",
      "650",
      "4.3",
      "The living is easy in this impressive, generously proportioned contemporary residence with lake and ocean views, located within a level stroll to the sand and surf.",
      "assets/images/house_07.png",
      "assets/images/owner.png",
      [
        "assets/images/kitchen.jpg",
        "assets/images/bath_room.jpg",
        "assets/images/swimming_pool.jpg",
        "assets/images/bed_room.jpg",
        "assets/images/living_room.jpg",
      ],
    ),
    Property(
      "RENT",
      "Simone House",
      "1,300.00",
      "Langley",
      "720",
      "4.4",
      "The living is easy in this impressive, generously proportioned contemporary residence with lake and ocean views, located within a level stroll to the sand and surf.",
      "assets/images/house_08.png",
      "assets/images/owner.png",
      [
        "assets/images/kitchen.jpg",
        "assets/images/bath_room.jpg",
        "assets/images/swimming_pool.jpg",
        "assets/images/bed_room.jpg",
        "assets/images/living_room.jpg",
      ],
    ),
  ];
}
