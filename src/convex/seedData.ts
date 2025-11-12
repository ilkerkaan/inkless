import { internalMutation } from "./_generated/server";

export const seed = internalMutation({
  args: {},
  handler: async (ctx) => {
    // Seed packages with exact pricing from inklessismore.ke
    await ctx.db.insert("packages", {
      name: "1 Single Laser Tattoo Removal Session",
      description: "Perfect for trying out our service or for very small tattoos. Experience our advanced Picosecond laser technology with negative cold therapy.",
      price: 4500,
      features: [
        "Single treatment session",
        "Advanced Picosecond laser technology",
        "Negative cold therapy for comfort",
        "Professional consultation included",
        "Safe and effective treatment"
      ],
      isPopular: false,
      order: 1,
    });

    await ctx.db.insert("packages", {
      name: "3 Laser Tattoo Removal Sessions (Small Size Tattoo)",
      description: "Ideal for small tattoos. Three sessions to effectively fade or remove your unwanted ink with our state-of-the-art technology.",
      price: 10000,
      features: [
        "3 treatment sessions",
        "Best for small size tattoos",
        "Save KSh 3,500 with this package",
        "Advanced Picosecond laser technology",
        "Negative cold therapy included",
        "Experienced professionals"
      ],
      isPopular: true,
      order: 2,
    });

    await ctx.db.insert("packages", {
      name: "5 Laser Tattoo Removal Sessions (Medium Size Tattoo)",
      description: "Perfect for medium-sized tattoos. Five comprehensive sessions to help you achieve the results you desire.",
      price: 15000,
      features: [
        "5 treatment sessions",
        "Best for medium size tattoos",
        "Save KSh 7,500 with this package",
        "Advanced Picosecond laser technology",
        "Negative cold therapy for comfort",
        "Complete aftercare support"
      ],
      isPopular: false,
      order: 3,
    });

    await ctx.db.insert("packages", {
      name: "Laser Scar Removal",
      description: "Advanced laser treatment for scar removal. Reduce the appearance of scars and achieve smoother, more even skin tone.",
      price: 15000,
      features: [
        "Complete scar removal treatment",
        "Advanced laser technology",
        "Safe and effective",
        "Professional assessment included",
        "Customized treatment plan"
      ],
      isPopular: false,
      order: 4,
    });

    // Seed gallery images with real before/after photos from inklessismore.ke
    await ctx.db.insert("galleryImages", {
      title: "Arm Tattoo Removal",
      beforeImageUrl: "https://www.inklessismore.ke/cdn/shop/files/before1_720x.jpg?v=1731498799",
      afterImageUrl: "https://www.inklessismore.ke/cdn/shop/files/after1_720x.jpg?v=1731498799",
      description: "Complete removal of arm tattoo after multiple sessions",
      order: 1,
    });

    await ctx.db.insert("galleryImages", {
      title: "Wrist Tattoo Fading",
      beforeImageUrl: "https://www.inklessismore.ke/cdn/shop/files/before2_720x.jpg?v=1731498799",
      afterImageUrl: "https://www.inklessismore.ke/cdn/shop/files/after2_720x.jpg?v=1731498799",
      description: "Significant fading of wrist tattoo",
      order: 2,
    });

    await ctx.db.insert("galleryImages", {
      title: "Chest Tattoo Removal",
      beforeImageUrl: "https://www.inklessismore.ke/cdn/shop/files/before3_720x.jpg?v=1731498799",
      afterImageUrl: "https://www.inklessismore.ke/cdn/shop/files/after3_720x.jpg?v=1731498799",
      description: "Professional removal of chest tattoo",
      order: 3,
    });

    await ctx.db.insert("galleryImages", {
      title: "Back Tattoo Transformation",
      beforeImageUrl: "https://www.inklessismore.ke/cdn/shop/files/before4_720x.jpg?v=1731498799",
      afterImageUrl: "https://www.inklessismore.ke/cdn/shop/files/after4_720x.jpg?v=1731498799",
      description: "Complete back tattoo removal",
      order: 4,
    });

    await ctx.db.insert("galleryImages", {
      title: "Leg Tattoo Fading",
      beforeImageUrl: "https://www.inklessismore.ke/cdn/shop/files/before5_720x.jpg?v=1731498799",
      afterImageUrl: "https://www.inklessismore.ke/cdn/shop/files/after5_720x.jpg?v=1731498799",
      description: "Effective fading of leg tattoo",
      order: 5,
    });

    await ctx.db.insert("galleryImages", {
      title: "Shoulder Tattoo Removal",
      beforeImageUrl: "https://www.inklessismore.ke/cdn/shop/files/before6_720x.jpg?v=1731498799",
      afterImageUrl: "https://www.inklessismore.ke/cdn/shop/files/after6_720x.jpg?v=1731498799",
      description: "Professional shoulder tattoo removal",
      order: 6,
    });

    // Seed site content with exact wording from inklessismore.ke
    await ctx.db.insert("siteContent", {
      key: "about_us",
      content: `# Uncover Flawless Skin with Advanced Laser Tattoo Removal in Nairobi

Welcome to Nairobi's premier destination for safe and effective laser tattoo removal! At Inkless is More laser tattoo removal studio, we use the advanced Picosecond laser technology combined with negative cold therapy in tattoo removal to fade or remove unwanted tattoos safely and comfortably, with experienced professionals.

## Our Mission

If your tattoo no longer feels like a part of you, we are here to help you fade or completely remove it safely. Reclaim your confidence and embrace flawless skin with Nairobi's most advanced Picosecond laser tattoo removal service.

## Our Technology

We use advanced Picosecond laser technology combined with negative cold therapy to ensure safe, effective, and comfortable tattoo removal. Results depend on tattoo specifics, and our experienced professionals will guide you through every step of the process.

## Let Your Skin Shine Again! Redefine Your Story!

Whether you're looking to fade an old tattoo or achieve a complete removal, we're here to help you regain confidence in your skin.`,
    });

    await ctx.db.insert("siteContent", {
      key: "training_info",
      content: `# Become an Ambassador

Love your results? Share your journey and earn rewards! Our Ambassador Program offers exclusive discounts and access for every successful referral.

## Training Options

### Online Training
- Self-paced video modules
- Learn about our process and benefits
- Get your unique referral code

### In-Person Training
- Visit our clinic for a comprehensive session
- Meet our specialists
- See the technology in action

### Benefits
- Earn 10% commission on referrals
- Your referrals get 20% discount
- Exclusive ambassador perks
- Be part of our community`,
    });

    console.log("Seed data inserted successfully!");
  },
});