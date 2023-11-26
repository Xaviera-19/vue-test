<template>
	<!-- foreach -->
	<div
		v-for="item in data"
		:key="item.title"
		class="mb-4 px-3 py-2 flex flex-col gap-3 border border-yellow-200 border-opacity-50 rounded">
		<div class="p-2">
			<a :href="item.href" class="image-container " target="_blank">
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
  <!-- 新增區塊按鈕 -->
	<div class="mb-4 px-3 py-2 flex flex-col gap-3 border border-yellow-200 border-opacity-50 rounded justify-center items-center">
    <!-- 圖片 -->
    <!-- <input v-model="newBlock.image" type="file" name="image" /> -->
    <!-- 連結 -->
    <div class="relative rounded-lg w-64 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
      <input v-model="newBlock.href" placeholder="url.." class="relative bg-transparent ring-0 outline-none border border-neutral-500 placeholder-indigo-100 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-70 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500 text-white" type="text">
    </div>
    <!-- 標題 -->
    <div class="relative rounded-lg w-64 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
      <input v-model="newBlock.title" placeholder="title.." class="relative bg-transparent ring-0 outline-none border border-neutral-500 placeholder-indigo-100 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-70 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500 text-white" type="text">
    </div>
    <!-- 內容 -->
    <div class="relative rounded-lg w-64 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
      <input v-model="newBlock.content" placeholder="content..." class="relative bg-transparent ring-0 outline-none border border-neutral-500 placeholder-indigo-100 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-70 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500 text-white" type="text">
    </div>
    <button @click="addNewBlock" id="submit_btn" class="text-black w-fit text-[14px] px-[18px] py-[9px] rounded border border-[rgb(50, 50, 50)] shadow-md ">
      新增作品
    </button>
    {{ newBlock }}
	</div>
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
const newBlock = ref({
  image: "",
  href: "",
  title: "",
  content: "",
  link: "",
});
// 新增區塊的方法
const addNewBlock = () => {
  data.value.push({
    src: newBlock.value.image,
    href: newBlock.value.href,
    title: newBlock.value.title,
    link: newBlock.value.link,
    content: newBlock.value.content,
  });

  // 清空輸入欄位
  newBlock.value.image = "";
  newBlock.value.href = "";
  newBlock.value.title = "";
  newBlock.value.content = "";
};
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

#submit_btn {
  background-image: linear-gradient(rgb(214, 202, 254), rgb(158, 129, 254));
  box-shadow: 0px 1px 6px 0px rgb(158, 129, 254);
  transform: translate(0, -3px);
  transition: 0.2s;
  transition-timing-function: linear;
}
#submit_btn:active {
  transform: translate(0, 0);
  border-bottom: 2px solid rgb(50, 50, 50);
}
</style>
