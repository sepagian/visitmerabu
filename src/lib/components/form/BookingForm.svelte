<script lang="ts">
	let formData = {
		fullName: "",
		email: "",
		checkIn: "",
		checkOut: "",
		message: "",
	};

	let agreedToPrivacy = false;

	const whatsappNumber = "6282157923330";

	function handleSubmit() {
		if (!formData.fullName || !formData.email || !formData.checkIn || !formData.checkOut) {
			alert("Mohon lengkapi semua field yang wajib diisi (Nama, Email, dan Tanggal).");
			return;
		}

		if (!agreedToPrivacy) {
			alert("Mohon setujui kebijakan privasi terlebih dahulu.");
			return;
		}

		// Format the message for WhatsApp
		const whatsappMessage = `
*Permintaan Booking dari VisitMerabu.org*

*Nama:* ${formData.fullName}
*Email:* ${formData.email}
*Tanggal Check-in:* ${formData.checkIn}
*Tanggal Check-out:* ${formData.checkOut}

*Pesan/Permintaan Khusus:*
${formData.message || "Tidak ada pesan tambahan."}
    `.trim();

		// Encode the message for the URL
		const encodedMessage = encodeURIComponent(whatsappMessage);

		// Create the WhatsApp URL
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

		window.open(whatsappUrl, "_blank");

		formData = {
			fullName: "",
			email: "",
			checkIn: "",
			checkOut: "",
			message: "",
		};
		agreedToPrivacy = false;
	}
</script>

<div class="w-full max-w-md">
	<form
		on:submit|preventDefault={handleSubmit}
		class="space-y-4">
		<!-- Full Name -->
		<div>
			<label
				for="fullName"
				class="mb-2 block text-sm font-medium text-white">Nama Lengkap</label>
			<input
				id="fullName"
				type="text"
				bind:value={formData.fullName}
				placeholder="Masukkan nama lengkap Anda"
				class="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white/30"
				required />
		</div>

		<!-- Email -->
		<div>
			<label
				for="email"
				class="mb-2 block text-sm font-medium text-white">Alamat Email</label>
			<input
				id="email"
				type="email"
				bind:value={formData.email}
				placeholder="Masukkan alamat email"
				class="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white/30"
				required />
		</div>

		<!-- Check-in and Check-out Row -->
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="checkIn"
					class="mb-2 block text-sm font-medium text-white">Tanggal Check-in</label>
				<input
					id="checkIn"
					type="date"
					bind:value={formData.checkIn}
					class="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white/30"
					required />
			</div>
			<div>
				<label
					for="checkOut"
					class="mb-2 block text-sm font-medium text-white">Tanggal Check-out</label>
				<input
					id="checkOut"
					type="date"
					bind:value={formData.checkOut}
					class="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white/30"
					required />
			</div>
		</div>

		<!-- Message -->
		<div>
			<label
				for="message"
				class="mb-2 block text-sm font-medium text-white">Pesan/Permintaan Khusus</label>
			<textarea
				id="message"
				bind:value={formData.message}
				placeholder="Contoh: permintaan makanan vegetarian, alergi, dll."
				rows="4"
				class="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white/30"
			></textarea>
		</div>

		<!-- Privacy Policy Checkbox -->
		<div class="flex items-start space-x-3">
			<input
				id="privacy"
				type="checkbox"
				bind:checked={agreedToPrivacy}
				class="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 text-white focus:ring-white/30"
				required />
			<label
				for="privacy"
				class="text-sm text-white">
				Saya telah membaca dan menyetujui
				<a
					href="/privacy-policy"
					class="underline hover:text-white/80">Kebijakan Privasi</a
				>.
			</label>
		</div>

		<!-- Submit Button -->
		<button
			type="submit"
			class="text-merabuSky-800 w-full rounded-lg bg-white px-6 py-3 font-semibold transition-colors duration-200 hover:bg-white/90">
			Kirim Permintaan
		</button>
	</form>
</div>
