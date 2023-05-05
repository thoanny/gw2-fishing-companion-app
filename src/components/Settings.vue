<template>
    <label for="modal-settings" class="btn btn-xs btn-square btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="h-4 w-4">
            <path
                d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
        </svg>
    </label>
    <input type="checkbox" id="modal-settings" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box p-4">
            <h3 class="ff-rc uppercase text-lg leading-4 mb-2">Paramètres</h3>
            <div>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text-alt">Clé API Guild Wars 2</span>
                    </label>
                    <div class="input-group input-group-xs w-full">
                        <input type="text" class="input input-bordered input-xs w-full" />
                        <label class="btn btn-xs btn-success btn-square" v-if="false">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
                                class="h-3 w-3">
                                <path
                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                            </svg>
                        </label>
                        <label class="btn btn-xs btn-error btn-square" v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" fill="currentColor"
                                class="h-3 w-3">
                                <path
                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                            </svg>
                        </label>
                    </div>
                </div>
                <div class="form-control mt-2">
                    <label class="label cursor-pointer">
                        <span class="label-text text-xs">Masquer les poissons pêchés</span>
                        <input type="checkbox" class="toggle toggle-success toggle-xs" checked />
                    </label>
                </div>
            </div>
            <div class="modal-action mt-2">
                <label for="modal-settings" class="btn btn-block btn-primary btn-sm">Fermer</label>
            </div>
        </div>
    </div>
</template>