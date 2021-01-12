<script>
    import { stores } from '@sapper/app';
    const { page } = stores();
    $: {
      if (typeof gtag !== "undefined"){
        gtag("config", "G-2JGMK277EC", {
          page_path: $page.path
        });
      }
    }
  </script>