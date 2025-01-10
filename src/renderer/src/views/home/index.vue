<template>
  <n-flex vertical>
    <NSpace>
      <n-form-item label="书名" class="w-xl">
        <n-input type="text" />
      </n-form-item>
      <n-form :label-width="100" label-placement="left" class="w-xl">
        <n-form-item label="书名">
          <n-input type="text" />
        </n-form-item>
        <n-form-item label="作者">
          <n-input type="text" />
        </n-form-item>
        <n-form-item label="简介">
          <n-input type="textarea" />
        </n-form-item>
      </n-form>
    </NSpace>
    <n-space>
      <n-button type="primary">
        生成txt
      </n-button>
      <n-button type="primary">
        生成epub
      </n-button>
    </n-space>
  </n-flex>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Home'
})
</script>

<style scoped></style>