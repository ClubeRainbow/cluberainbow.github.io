<template>
    <div class="fixed z-30 top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.25)] px-4 sm:px-8 pt-12 md:pt-24">

        <div class="relative flex flex-col gap-4 w-full md:max-w-[1000px] mx-auto box py-6 px-8">
    
            <slot></slot>

            <button @click="$emit('close')" class="absolute top-2.5 right-2.5 hover:brightness-110 focus:brightness-110">
                <img src="../../assets/icon_x.svg" alt="close" class="h-7 w-7 md:h-8 md:w-8"/>
            </button>

        </div>
        
    </div>
</template>