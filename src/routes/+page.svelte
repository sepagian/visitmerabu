<script lang="ts">
	import HeroSection from "$lib/components/HeroSection.svelte";
	import AboutSection from "$lib/components/AboutSection.svelte";

	const heroData = {
		title: "Menjejak di Tanah Merabu—Kampung di Pelukan Hutan Kalimantan",
		description:
			"Di balik perbukitan batu kapur dan aliran Sungai Lesan, Kampung Merabu berdiri sebagai penjaga alam dan budaya Dayak. Jelajahi tempat di mana waktu terasa melambat, dan kehidupan berjalan selaras dengan bumi.",
		bgImage: "/hero.jpg",
		buttonText: "Jelajahi Merabu",
		buttonLink: "/experiences",
	};

	const aboutData = {
		title: "Kampung Merabu: Hidup Bersama Alam, Bukan Merampas Alam",
		subtitle: "Kampung kecil dengan semangat besar",
		contentParagraph: [
			"Di Merabu, hutan bukan objek wisata—ia adalah rumah, guru, dan sumber kehidupan. Warga tidak datang untuk menguasai, tapi lahir dari tanah yang sama dan tumbuh bersama alam yang dipelihara turun-temurun.",
			"Setiap jalur pendakian, setiap sungai, setiap kisah yang dibisikkan di bawah pohon tua—adalah bagian dari hubungan yang dijaga dengan penuh hormat. Di sini, alam tidak dikorbankan demi kunjungan, melainkan dihadirkan sebagai teman perjalanan.",
			"Kampung Merabu membuka diri bukan untuk dieksploitasi, tetapi untuk dipahami. Bagi mereka yang datang dengan hati terbuka, kampung ini bukan sekadar tempat singgah—melainkan cermin cara hidup yang lebih bijak, lebih tenang, dan lebih bermakna.",
		],
		bgColor: "bg-merabuAmber-50",
		buttonText: "Pelajari Lebih Lanjut",
		buttonLink: "/learn",
	};
</script>

<HeroSection {...heroData} />
<AboutSection {...aboutData} />
