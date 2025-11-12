import { internalMutation } from "./_generated/server";

export const seed = internalMutation({
  args: {},
  handler: async (ctx) => {
    // Seed packages
    await ctx.db.insert("packages", {
      name: "Small Tattoo Package",
      description: "Ideal for tattoos up to 3x3 inches. Perfect for small symbols, names, or tiny designs.",
      price: 5000,
      features: [
        "Up to 3x3 inches coverage",
        "2-4 sessions typically required",
        "Advanced laser technology",
        "Minimal discomfort",
        "Free consultation included"
      ],
      isPopular: false,
      order: 1,
    });

    await ctx.db.insert("packages", {
      name: "Full Sleeve Fading",
      description: "Designed for larger pieces or full sleeves to lighten/fade for a cover-up or complete removal.",
      price: 25000,
      features: [
        "Full arm coverage",
        "6-10 sessions typically required",
        "State-of-the-art Q-switched laser",
        "Personalized treatment plan",
        "Post-care support included"
      ],
      isPopular: true,
      order: 2,
    });

    await ctx.db.insert("packages", {
      name: "Custom Session Plan",
      description: "A fully customized plan for multiple tattoos, complex colors, or unique removal challenges.",
      price: 15000,
      features: [
        "Tailored to your specific needs",
        "Flexible session scheduling",
        "Multi-color removal capability",
        "Progress tracking",
        "Dedicated specialist"
      ],
      isPopular: false,
      order: 3,
    });

    // Seed site content
    await ctx.db.insert("siteContent", {
      key: "about_us",
      content: `# About InklessIsMore.ke

We are Kenya's premier laser tattoo removal clinic, dedicated to helping you achieve clear, clean skin safely and effectively.

## Our Mission
To provide safe, effective, and professional laser tattoo removal services using the latest technology and techniques.

## Our Technology
We use advanced Q-switched laser technology that targets ink particles without damaging surrounding skin tissue.

## Our Team
Our certified specialists have years of experience in laser treatments and are committed to your comfort and results.`,
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
