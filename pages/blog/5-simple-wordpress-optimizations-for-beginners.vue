<template>
  <main>
    <h1>5 Simple WordPress Optimizations for Beginners</h1>
    <small>Aug 31, 2016</small>
    <article>
      <p>
        So what can you do to make your website faster? Here are a few simple ways to speed up your WordPress
        Website and make your visitors happy!
      </p>

      <h2>Minify your HTML, CSS, and Javascript</h2>

      <p>Minifying a file isn't any crazy compression algorithm - Minifying is basically removing the whitespace from files such as HTML, CSS, and Javascript.</p>

      <p>
        While spaces and tabs make the code more readable for humans, servers and internet browsers don't need it to be
        readable to the human eye to execute.
      </p>

      <p>
        Instead of going through each file and removing spaces in your code, plugin's like
        <a
          title="WP Minify"
          href="http://wordpress.org/plugins/wp-minify/"
          target="_blank"
        >
          WP
          Minify
        </a>and W3 Total Cache (Mentioned up in caching section) can handle this at runtime.
      </p>

      <h2>Cache like no tomorrow</h2>

      <p>
        Got static images, CSS and Javascript on your website that you don't regularly change? Browser side caching
        is now your friend. I know, second step and you already made a friend. Look at you go!
      </p>

      <p>
        Basically caching involves storing files from your site so the file is only loaded the first time the user
        visits the website - instead of every time that user visits your website. This speeds up load times for your
        users and cuts down bandwidth use on your server - saving you resources and money.
      </p>

      <p>
        A popular caching plugin for WordPress is
        <a
          title="W3 Total Cache"
          href="http://wordpress.org/plugins/w3-total-cache/"
          target="_blank"
        >W3 Total Cache</a> - I personally use this one
        on all my websites! The W3 Total Cache plugin requires some technical experience and skills - so don't worry
        if you aren't a server expert. An alternative plugin is
        <a
          title="WP Super Cache"
          href="http://wordpress.org/plugins/wp-super-cache/"
          target="_blank"
        >WP Super Cache</a> which is a more
        user-friendly plugin built by the great people at
        <a
          href="https://automattic.com/"
          target="_blank"
        >Automattic</a>
        (the company behind WordPress).
      </p>

      <h2>Reduce your HTTP Requests</h2>

      <p>
        When someone visits a page on your site, the required files are sent to that person's browser, such as
        images, CSS, and Javascript files. So if you have an HTML file, four CSS files, six Javascript files, and
        eight images, making a total of 18 files required to load the web page - That is a lot!
      </p>

      <p>
        By reducing the number of files requested in your site's pages, you can reduce the number of HTTP requests
        that are called to render a page, speeding up load times.
      </p>

      <p>
        One way to do this is by having a simple and clean website design. W3 Total Cache has a minify section which
        allows you to combine your CSS and Javascript into one file which also helps cut down on HTTP requests.
      </p>

      <h2>Compress your Images</h2>
      <p>
        Images are usually the largest files that need to be loaded on a web page so if they aren't compressed they
        will slow down your websites load time.
      </p>

      <p>
        There are tons of WordPress plugins to compress images. I recommend the free version of
        <a
          title="WP Smush.it"
          href="http://wordpress.org/plugins/wp-smushit/"
          target="_blank"
        >WP Smush.it</a>, now
        managed and supported by WPMU DEV, automatically removes metadata and removes unused colors from indexed
        images. You can always go pro if you want, however, the free version is great for starting!
      </p>

      <h2>Optimize Database</h2>

      <p>
        When you optimize your WordPress database tables it will help free up space and keep your database running
        smoothly and efficiently.
      </p>

      <p>
        I recommend
        <a
          title="WP-Optimize"
          href="http://wordpress.org/plugins/wp-optimize/"
          target="_blank"
        >WP-Optimize</a>,
        a database optimization, and website cleanup tool. This plugin also lets you remove comments in the spam
        queue, unapproved comments, and items in the trash.
      </p>

      <h2>Yay! You sped up your WordPress site!</h2>

      <p>
        So there you have it, 5 ways to improve your site load time and make your website awesome! Optimizing your
        site helps with page speed and SEO, resulting in users exploring your website and engaging with your content.
      </p>

      <p>
        Use Google's
        <a href="https://web.dev/measure" target="_blank">Lighthouse</a> tool to check your websites performance!
      </p>
    </article>
    <blog-post-styles/>
  </main>
</template>

<script>
import BlogPostStyles from "~/components/BlogPostStyles.vue";

export default {
  components: {
    BlogPostStyles
  },
  head() {
    return {
      title: "5 Simple WordPress Optimizations for Beginners | Liam Stewart"
    };
  }
};
</script>