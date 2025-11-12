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

    // Seed gallery images with real uploaded photos
    await ctx.db.insert("galleryImages", {
      title: "Back Tattoo Removal - First Session Results",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/1af3b1a5-d4df-4b41-a82a-76e9923501fd",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/9df7f620-4a33-4177-aa0c-1b0d564917a9",
      description: "Visible fading after just one session",
      order: 1,
    });

    await ctx.db.insert("galleryImages", {
      title: "Arm Tattoo Removal Progress",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/c1355793-0ef2-4b2f-b760-f52962ca1595",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/d9e03b4c-a25e-4772-8e3b-2481b07fb4c9",
      description: "Significant fading after multiple sessions",
      order: 2,
    });

    await ctx.db.insert("galleryImages", {
      title: "Small Tattoo Complete Removal",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/47a2922a-9f35-4e37-981e-1338710ef545",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/08165c61-0a19-4a51-8782-a7f41feff4f1",
      description: "Nearly complete removal after treatment course",
      order: 3,
    });

    await ctx.db.insert("galleryImages", {
      title: "Shoulder Tattoo Treatment",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/be72edff-e720-4ae7-8bb9-e79a9274c3eb",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/993aad1a-0826-4050-a2c1-aabb36b5d300",
      description: "Professional results with Picosecond laser",
      order: 4,
    });

    await ctx.db.insert("galleryImages", {
      title: "Leg Tattoo Fading",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/46b6ff0c-ac5f-4e65-88fd-250f77ef7ea4",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/5e245880-bc80-43c8-8f2d-3133bdfdded7",
      description: "Effective treatment on darker skin tones",
      order: 5,
    });

    await ctx.db.insert("galleryImages", {
      title: "Wrist Tattoo Removal",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/f0da9263-b487-4dbb-97d3-0fb5b4501da2",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/25cff39b-8fa1-4b91-82f9-432b7b721778",
      description: "Clean results after 3 sessions",
      order: 6,
    });

    await ctx.db.insert("galleryImages", {
      title: "Forearm Text Tattoo",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/0c54443a-cb25-48fc-b557-cd32cf9e10b2",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/503d829d-0884-401c-ab84-19710267b49a",
      description: "Text tattoo successfully faded",
      order: 7,
    });

    await ctx.db.insert("galleryImages", {
      title: "Ankle Tattoo Progress",
      beforeImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/b65abe9b-bb6f-473b-a515-eff051f947b3",
      afterImageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/b4d37961-fa87-4e95-88b7-245781c3773e",
      description: "Gradual fading with each treatment",
      order: 8,
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