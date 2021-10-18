<script>
  import {peer} from 'store.js';
  import Connect from 'Connect.svelte';
  $: peerid = peer.id

</script>

<main>
  <h1>Hello {peerid}!</h1>
  
</main>
<Connect/>
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
