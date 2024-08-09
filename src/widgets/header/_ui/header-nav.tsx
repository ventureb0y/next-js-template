import { Button } from "@/src/shared/components/ui/button";
import { ROUTES } from "@/src/shared/config/routes";
import Link from "next/link";

export function HeaderNav () {
    return (
        <nav>   
            <Button variant="ghost" asChild><Link href={ROUTES.HOME}>Главная</Link></Button>
        </nav>
    )
}