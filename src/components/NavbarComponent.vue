<template>
  <nav>
    <div class="my-4 bg-white">
      <div class="flex items-center justify-around">
        <div>
          <RouterLink to="/">
            <img :src="logo" :alt="alt" />
          </RouterLink>
        </div>
        <div class="flex items-center gap-8">
          <div class="flex items-center gap-2">
            <img src="/public/img/icons/search-glass-icon.png" alt="search your favorite food" />
            <p class="font-bold text-gray-800">Search Food</p>
          </div>
          <div class="relative">
            <div
              class="absolute -inset-2 rounded-lg bg-gradient-to-b from-orange-300 to-orange-500 opacity-20 blur"
            ></div>
            <div
              class="relative flex h-12 w-28 items-center justify-center rounded-lg bg-white text-slate-300 gap-2"
            >
              <img src="/public/img/icons/user-icon.png" alt="login into your best account" />
              <button
                class="bg-gradient-to-l from-orange-300 to-orange-500 inline-block text-transparent bg-clip-text font-bold"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  props: ['logo', 'alt'],
}
</script>
