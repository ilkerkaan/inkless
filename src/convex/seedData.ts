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

    // Clear existing gallery images first
    const existingImages = await ctx.db.query("galleryImages").collect();
    for (const img of existingImages) {
      await ctx.db.delete(img._id);
    }

    // Seed gallery images with working URLs from uploaded images
    await ctx.db.insert("galleryImages", {
      title: "Back Tattoo Removal - First Session Results",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/308bf6f0-9632-4951-a07b-c2b256b044fa",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/1f704a9b-5b73-4021-8a74-41e94141c996",
      description: "Visible fading after just one session",
      order: 1,
    });

    await ctx.db.insert("galleryImages", {
      title: "Arm Tattoo Treatment Progress",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/d03dabf7-72bd-4300-9279-5811ddf1259e",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/5c020335-158b-4527-b24c-e3a9ae852bbd",
      description: "Professional laser treatment in progress",
      order: 2,
    });

    await ctx.db.insert("galleryImages", {
      title: "Small Tattoo Complete Removal",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/9e55ce9f-ca30-4a8a-9dd5-b68f1c732c92",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/8930d4fd-cca5-4652-89ed-85b6d5994102",
      description: "Nearly complete removal after multiple sessions",
      order: 3,
    });

    await ctx.db.insert("galleryImages", {
      title: "Shoulder Tattoo Fading",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/bc123115-f23b-4547-a141-0530dedd64a6",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/5d4af9ef-c2ce-4523-aed0-8bff828e430a",
      description: "Significant progress on shoulder tattoo",
      order: 4,
    });

    await ctx.db.insert("galleryImages", {
      title: "Wrist Tattoo Removal",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/0d4d9d51-80e5-4f57-b3fb-adcd909545b9",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/846af37c-17aa-45c7-9a88-ff3d90eae555",
      description: "Effective treatment on delicate wrist area",
      order: 5,
    });

    await ctx.db.insert("galleryImages", {
      title: "Forearm Text Tattoo - 3 Sessions",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/426a4a2e-a6b6-4f68-98ba-400794e10c96",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/12694330-691f-44c8-80b9-86ab0e171577",
      description: "Text tattoo fading beautifully after 3 sessions",
      order: 6,
    });

    await ctx.db.insert("galleryImages", {
      title: "Ankle Tattoo Treatment",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/b0cdc625-adf0-4356-a1d8-3afece0b7226",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/a76cad71-461c-447f-b1fb-a15358983329",
      description: "Professional results on ankle tattoo",
      order: 7,
    });

    await ctx.db.insert("galleryImages", {
      title: "Leg Tattoo Removal Journey",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/b90887dd-8553-4ed8-8994-07ebfe360273",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/a6cdf2c5-f015-4301-bd36-0ec121275e56",
      description: "Remarkable transformation on leg tattoo",
      order: 8,
    });

    await ctx.db.insert("galleryImages", {
      title: "Chest Tattoo Removal Progress",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/4671d68e-3366-48b0-a0d3-2f470eb89cda",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/e3a16882-1925-44d8-aae5-76277b0e1ee3",
      description: "Excellent progress on chest area tattoo",
      order: 9,
    });

    await ctx.db.insert("galleryImages", {
      title: "Hand Tattoo Fading",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/1edae293-7997-4cf9-a2cc-974debb57d82",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/b7418aff-6640-42be-acd3-354f0496d9e4",
      description: "Hand tattoo showing significant fading",
      order: 10,
    });

    await ctx.db.insert("galleryImages", {
      title: "Upper Arm Tattoo Treatment",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/533e5455-c852-495f-8b23-a18fbde959a1",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/f057b39b-452e-49ce-a584-a09cd27730e0",
      description: "Upper arm tattoo removal in progress",
      order: 11,
    });

    await ctx.db.insert("galleryImages", {
      title: "Side Tattoo Removal",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/cfc273f3-42be-46cd-827c-9375d6c4c288",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/83822655-744c-49e4-bbaf-f5f1dc39e9a0",
      description: "Side body tattoo showing great results",
      order: 12,
    });

    await ctx.db.insert("galleryImages", {
      title: "Lower Leg Tattoo Progress",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/2b08d61c-2900-497a-86a6-161f73ece24f",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/fcca02cc-bae8-49ba-b8d5-eb5203ca442f",
      description: "Lower leg tattoo fading effectively",
      order: 13,
    });

    await ctx.db.insert("galleryImages", {
      title: "Forearm Symbol Removal",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/551c7feb-013e-4ab7-8b8e-aea4a413ff52",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/8fe4e191-d85d-4de5-959e-58d5ba08cc65",
      description: "Symbol tattoo removal showing excellent progress",
      order: 14,
    });

    await ctx.db.insert("galleryImages", {
      title: "Neck Tattoo Treatment",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/93bea3be-51cb-4d06-9251-3ac865405782",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/eee7a961-6574-4a7c-ad38-c8889980c80b",
      description: "Neck area tattoo removal in progress",
      order: 15,
    });

    await ctx.db.insert("galleryImages", {
      title: "Thigh Tattoo Fading",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/5487eadc-8853-4df3-95db-e15f23a9b8f9",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/1fab343e-47c5-4dad-ac55-0732155e649d",
      description: "Thigh tattoo showing remarkable fading",
      order: 16,
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