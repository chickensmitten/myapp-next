import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <h1>Hello! World~!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non leo neque. Integer vitae elit mollis, tempus neque sed, venenatis erat. Morbi pretium rutrum mi, non tempor velit pharetra egestas. Curabitur elit lectus, malesuada id odio at, pretium mollis odio. Proin commodo risus nec sodales semper. Maecenas tempor nibh eu velit aliquam rhoncus. Duis ut molestie nisi, quis vulputate metus. Aliquam tincidunt a neque at ornare. In hac habitasse platea dictumst. Sed sem massa, fermentum at iaculis scelerisque, lobortis vitae est. Morbi dictum justo ut mauris pretium feugiat et id tellus. Ut sed augue sed est pellentesque dictum at non metus. Nunc nibh magna, dapibus in dolor non, commodo facilisis turpis. Donec fermentum porttitor metus nec tincidunt. Donec sollicitudin magna nec mattis consectetur.</p>
      <Link href="/posts">Posts</Link>
    </Fragment>
  )
}
