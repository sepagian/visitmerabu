interface BaseCard {
	title: string;
}

export interface FeatureCardData extends BaseCard {
	type: "feature";
	description: string;
	bgColor: string;
}

export interface ImageCardData extends BaseCard {
	type: "image";
	buttonText: string;
	buttonLink: string;
	imageUrl: string;
}

export type CardData = FeatureCardData | ImageCardData;

interface BaseData {
	title: string;
	titleColor: string;
}

export interface HeroData extends BaseData {
	subtitle: string;
	subtitleColor: string;
	imageUrl: string;
	buttonText: string;
	buttonLink: string;
}

export interface AboutData extends BaseData {
	subtitle: string;
	subtitleColor: string;
	contentParagraph: string[];
	contentColor: string;
	buttonText: string;
	buttonLink: string;
}

export interface WhyData extends BaseData {
	subtitle: string;
	subtitleColor: string;
	bgColor: string;
	cards: CardData[];
}

export const heroData: HeroData = {
	title: "Menjejak di Tanah Merabu—Kampung di Pelukan Hutan Kalimantan",
	subtitle:
		"Di balik perbukitan batu kapur dan aliran Sungai Lesan, Kampung Merabu berdiri sebagai penjaga alam dan budaya Dayak. Jelajahi tempat di mana waktu terasa melambat, dan kehidupan berjalan selaras dengan bumi.",
	titleColor: "text-merabuAmber-50",
	subtitleColor: "text-merabuAmber-50",
	imageUrl: "/hero.jpg",
	buttonText: "Jelajahi Merabu",
	buttonLink: "/experiences",
};

export const aboutData: AboutData = {
	title: "Kampung Merabu: Hidup Bersama Alam, Bukan Merampas Alam",
	subtitle: "Kampung kecil dengan semangat besar",
	contentParagraph: [
		"Di Merabu, hutan bukan objek wisata—ia adalah rumah, guru, dan sumber kehidupan. Warga tidak datang untuk menguasai, tapi lahir dari tanah yang sama dan tumbuh bersama alam yang dipelihara turun-temurun.",
		"Setiap jalur pendakian, setiap sungai, setiap kisah yang dibisikkan di bawah pohon tua—adalah bagian dari hubungan yang dijaga dengan penuh hormat. Di sini, alam tidak dikorbankan demi kunjungan, melainkan dihadirkan sebagai teman perjalanan.",
		"Kampung Merabu membuka diri bukan untuk dieksploitasi, tetapi untuk dipahami. Bagi mereka yang datang dengan hati terbuka, kampung ini bukan sekadar tempat singgah—melainkan cermin cara hidup yang lebih bijak, lebih tenang, dan lebih bermakna.",
	],
	titleColor: "text-merabuSky-800",
	subtitleColor: "text-merabuSky-600",
	contentColor: "text-merabuSky-700",
	buttonText: "Pelajari Lebih Lanjut",
	buttonLink: "/learn",
};

export const whyData: WhyData = {
	title: "Hidup Berdampingan bersama Alam dan Budaya",
	subtitle: "Mengapa Merabu?",
	titleColor: "text-merabuSky-800",
	subtitleColor: "text-merabuSky-600",
	bgColor: "bg-merabuAmber-50",
	cards: [
		{
			type: "feature",
			title: "Komitmen pada Pariwisata Berkelanjutan",
			description:
				"Di Merabu, setiap kunjungan diupayakan memberi manfaat jangka panjang bagi alam dan masyarakat. Kami fokus pada model ekowisata yang mendukung konservasi hutan, pendidikan lokal, dan kesejahteraan komunitas Dayak Lebo.",
		} as FeatureCardData,
		{
			type: "feature",
			title: "Pengalaman yang Dibagikan oleh Lokal",
			description:
				"Semua kegiatan wisata dirancang, dipandu, dan dikisahkan oleh penduduk lokal. Pendekatan ini memastikan pengalaman yang autentik dan pendapatan yang kembali langsung ke desa.",
		} as FeatureCardData,
		{
			type: "feature",
			title: "Pelestarian Budaya Turun Temurun",
			description:
				"Kunjungan Anda membantu menjaga tradisi Dayak Lebo—dari seni menenun hingga ritual adat. Budaya di Merabu bukan pajangan, melainkan warisan yang diteruskan melalui kebersamaan.",
		} as FeatureCardData,
		{
			type: "feature",
			title: "Menjaga Alam untuk Generasi Mendatang",
			description:
				"Merabu berdiri di kawasan kaya keanekaragaman hayati. Kami bekerja sama dengan lembaga konservasi untuk melindungi habitat satwa, sungai, dan gua purba yang menjadi identitas kampung.",
		} as FeatureCardData,
		{
			type: "image",
			title: "Jelajahi Merabu lebih Dalam",
			buttonText: "Lihat Panduan",
			buttonLink: "/visit",
			imageUrl: "/ecosystems.jpg",
		} as ImageCardData,
	] as CardData[],
};
