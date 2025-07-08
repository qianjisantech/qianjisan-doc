export default {
  build: {
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        // 忽略特定警告
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return
        defaultHandler(warning)
      }
    }
  }
}
