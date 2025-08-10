<script lang="ts">
import {whereData} from "$lib/data/landingData";
</script>

<section class="section-base bg-merabuAmber-50 h-screen items-start">
	<span class="paragraph-caption {whereData.subtitleColor}">{whereData.subtitle}</span>
	<div class="section-container">
		<h1 class="heading-h1 {whereData.titleColor}">
			{whereData.title}
		</h1>
	</div>
	<div class="section-container">
        <p class="paragraph-base {whereData.descriptionColor}">{whereData.description}</p>
	</div>
</section>
