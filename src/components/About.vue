<template>
    <label for="modal-about" class="btn btn-square btn-xs btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-4 h-4">
            <path
                d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
        </svg>

    </label>
    <input type="checkbox" id="modal-about" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box p-4">
            <h3 class="ff-rc uppercase text-lg leading-4 mb-2">À propos</h3>
            <p class="mb-2">Le Compagnon de pêche est un overlay créé pour accompagner vos sessions de pêche sur Guild Wars
                2.</p>
            <p>Il est développé et maintenu par <a href="https://linktr.ee/thoanny" target="_blank"
                    class="underline">Thoanny</a> pour <a href="https://lebusmagique.fr" target="_blank"
                    class="underline">Le Bus
                    Magique</a>.</p>
            <div class="grid grid-cols-3 gap-2 mt-3">
                <a href="https://wiki.an-d.me/Guild_Wars_2/Compagnon_de_p%C3%AAche" target="_blank"
                    class="btn btn-primary btn-block btn-xs">Guide</a>
                <a href="https://github.com/thoanny/fishing-companion" target="_blank"
                    class="btn btn-primary btn-block btn-xs">Source</a>
                <a href="https://github.com/thoanny/fishing-companion/issues" target="_blank"
                    class="btn btn-primary btn-block btn-xs">Bug</a>
                <span class="btn btn-ghost btn-xs">Soutenir&nbsp;:</span>
                <a href="https://www.twitch.tv/subs/thoanny" target="_blank"
                    class="btn btn-primary btn-block btn-xs">Twitch</a>
                <a href="https://ko-fi.com/thoanny" target="_blank" class="btn btn-primary btn-block btn-xs">Don</a>
            </div>
            <div class="modal-action mt-2">
                <label for="modal-about" class="btn btn-block btn-primary btn-sm">Fermer</label>
            </div>
        </div>
    </div>
</template>