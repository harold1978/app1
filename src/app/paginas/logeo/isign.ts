import { FormControl } from "@angular/forms";

export interface Isign {
    correo:FormControl<string|null>,
    contrasena:FormControl<string|null>
}
