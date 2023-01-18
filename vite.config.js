import { defineConfig } from 'vituum'
import twig from '@vituum/twig'

export default defineConfig({
    imports: {
        filenamePattern: {
            '+.css': false,
            '+.scss': 'src/styles'
        }
    },
    
    integrations: [
        twig()
    ],
    
    templates: {
        format: 'twig'
    }
})