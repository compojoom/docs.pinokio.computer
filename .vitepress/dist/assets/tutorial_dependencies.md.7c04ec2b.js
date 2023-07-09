import{_ as s,o as n,c as a,V as e}from"./chunks/framework.7ae304b1.js";const o="/assets/download.94f4210a.png",l="/assets/downloaded.feca5176.png",p="/assets/downloaded2.e80604c9.png",A=JSON.parse('{"title":"Declaring dependencies","description":"","frontmatter":{},"headers":[],"relativePath":"tutorial/dependencies.md","filePath":"tutorial/dependencies.md"}'),t={name:"tutorial/dependencies.md"},c=e(`<h1 id="declaring-dependencies" tabindex="-1">Declaring dependencies <a class="header-anchor" href="#declaring-dependencies" aria-label="Permalink to &quot;Declaring dependencies&quot;">​</a></h1><p>Often your app may depend on 3rd party APIs. For example imagine an autonomous blogger app, which generates paragraphs and images with AI, and publishes the content to Tumblr.</p><p>This app may utilize:</p><ol><li><strong>LLaMA API:</strong> for LLM text generation</li><li><strong>StableDiffusion API:</strong> for image generation</li><li><strong>Tumblr post API:</strong> for posting to Tumblr.com</li></ol><p>When publishing your app, you can include the links in your <code>README.md</code> file so people can download them one by one.</p><p>But this is such a common feature that Pinokio has this built in.</p><p>In addition to including the links in the README file, you can use the <code>dependencies</code> array in the <code>pinokio.js</code> file to declare all the APIs one must install before using your app.</p><p>Here&#39;s an example <code>pinokio.js</code> file:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// pinokio.js</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">menu</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;i class=&#39;fa-solid fa-plug&#39;&gt;&lt;/i&gt; Install</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">href</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">install.json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">start.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">dependencies</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://github.com/malfunctionize/llama.git</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://github.com/malfunctionize/automatic1111.git</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://github.com/malfunctionize/tumblr.git</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>When this repository is downloaded and loaded on Pinokio, the user will see the following screen:</p><p><img src="`+o+'" alt="download.png"></p><p>When you click the download buttons, they will open in a new Pinokio window, where you can download and install these APIs.</p><p>Once all the APIs have been downloaded, refresh the page and you will see that the &quot;download&quot; buttons are gone and replaced with check marks to indicate that these dependencies have been downloaded:</p><p><img src="'+l+'" alt="downloaded.png"></p><p>Once all the dependencies have been installed, you can install the current app itself.</p><p><img src="'+p+'" alt="downloaded2.png"></p>',16),i=[c];function r(d,D,y,u,h,F){return n(),a("div",null,i)}const m=s(t,[["render",r]]);export{A as __pageData,m as default};