<template>
	<!-- foreach -->
	<div
		v-for="item in data"
		:key="item.title"
		class="mb-4 px-3 py-2 flex flex-col gap-3 border border-yellow-200 border-opacity-50 rounded">
		<div class="p-2">
			<a :href="item.href" class="image-container ">
				<img
					class="h-[250px] rounded-ss-xl rounded-ee-xl"
					alt="圖片尚未出現"
					:src="item.src"/>
				<div class="overlay rounded-ss-xl rounded-ee-xl text-center leading-[250px] text-lg text-white font-bold">點擊前往{{ item.link }}</div>
			</a>
		</div>
		<!-- 文字介紹區塊 -->
		<div class="flex flex-col grow px-2 text-white">
            <div class="title text-xl font-bold mb-2 underline">{{ item.title }}</div>
			<div class="content" v-html="item.content"></div>
		</div>
	</div>
	<!-- foreach -->
</template>

<script setup>
import { ref } from "vue";
const data = ref([
	{
		src: "src/assets/exmac.png",
		href: "https://exmac-rebuild.dev-hub.io/",
		title: "艾克馬 ( 專案 )",
		link: "測試站",
		content:
			"<p>此專案為全端班的Final Product，工程師確認無問題後會佈署上線。</p><p>使用Laravel10製作",
	},
	{
		src: "src/assets/weather_api.png",
		href: "https://github.com/Xaviera-19/weatherAPI",
		title: "Fetch Open Data Api ( 氣象卡 )",
		link: "GitHub",
		content: "陣列內，天氣小卡的內容",
	},
]);
</script>
<style scoped>
.image-container {
	position: relative;
}

.overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7); /* 半透明的黑色背景 */
	opacity: 0;
	transition: opacity 0.3s ease;
}

.image-container:hover .overlay {
	opacity: 1;
}
</style>
