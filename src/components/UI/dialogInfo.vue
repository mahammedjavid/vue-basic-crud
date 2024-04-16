<template>
  <Teleport to="body">
    <div>
      <dialog open>
        <header>
          <slot name="header">
            {{ title }}
          </slot>
        </header>
        <slot name="default"></slot>
        <slot name="action"></slot>
      </dialog>
    </div>
  </Teleport>
</template>

<style scoped>
dialog {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
