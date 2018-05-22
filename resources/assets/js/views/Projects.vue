<template>
    <div class="container">
        <div class="row justify-content-center">
            
                <div id="content">
                     <h4>eBags</h4>
                        <article>
                            This is my very first project. <br>
                            I know, it's not much but it is first thing I made. Idea is to make a service for designing and ordering authentic linen bags suitable for multiple use. "ORDER" button is not there jet, but there is no environmental awarenes of people in Serbia neither :(<br>
                        </article>

                    
                            <img src="/img/Ebags.png">
                            <img src="/img/EbagsII.png">
                            <br>
                
                        <p>
                            Technologies used: this is plain JS project. I used a canvas to draw shapes and text on.<br>
                            <a href="https://github.com/TheJecko/TheJecko.github.io" target="_blank"> Source code on GitHub</a><br>
                            Visit site: <a href="https://thejecko.github.io/" target="_blank">eBags</a>
                        </p>
                </div>

                <div id="content">
                        <h4>Tricky Questions</h4>
                        <article>
                            This is a project for those who love to be challenged. With click on each question, the answer will be revealed :)
                        </article>

                            <img src="/img/TQ.png">
                            <img src="/img/TQII.png">
                            <br>

                        <p>
                            Technologies used: this is a Vue.js project. Each question and answer is a Vue component.<br>
                            <a href="https://github.com/TheJecko/trickyQ.github.io" target="_blank">Source code on GitHub</a><br> 
                            Visit site: <a href="https://thejecko.github.io/tricky.github.io/" target="_blank">Tricky Questions</a>
                        </p>
                </div> 

                <div id="content">
                        <h4>LibraryDOTcom</h4> 
                        <article>
                            This is a project about one of my passions - books. It contains a database for adding books, and blog for posting reviews of books. Only authentificated users can post and add new books to the database.
                        </article>
                            <img src="/img/Ldc.png" class="gallery">
                            <img src="/img/LdcII.png" class="gallery">
                            <img src="/img/LdcIII.png" class="gallery">
                        <p>
                            Technologies used: this is a PHP project. I used Laravel framework and MySQL database.<br>
                            <a href="https://github.com/TheJecko/LibraryDC" target="_blank"> Source code on GitHub</a>  
                        </p>
                </div> 


                
           
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
