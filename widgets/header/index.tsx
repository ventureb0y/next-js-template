import { HeaderActions } from "./_ui/header-actions";
import { HeaderLogo } from "./_ui/header-logo";
import { HeaderNav } from "./_ui/header-nav";

export function Header () {
    return (
        <header>
            <section className="container mx-auto p-4">
                <HeaderLogo/>
                <HeaderNav/>
                <HeaderActions/>
            </section>
        </header>
    )
}