<template>
  <ULayout>
    <UPanel :width="100" >
      菜单
    </UPanel>
    <UPage>
      <UPanel grow>
        <UHeader>
          
        </UHeader>
        <UPanelContent>
          <slot />
        </UPanelContent>
      </UPanel>
    </UPage>
  </ULayout>
</template>