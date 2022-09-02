/** @format */

module.exports = {
	content: ["./public/*.html"],
	theme: {
		extend: {
			keyframes: {
				animation: {
					wiggle: "wiggle 1s ease-in-out infinite",
				},
				wiggle: {
					"0%": { translet: "translateY(-90rem)" },
					"100%": { translet: "translateY(0)" },
				},
			},
		},
	},
	plugins: [],
};
