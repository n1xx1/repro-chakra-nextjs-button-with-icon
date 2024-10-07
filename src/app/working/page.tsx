"use client";

import { Button, Container, Stack } from "@chakra-ui/react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Container py="10">
      <Stack>
        <Button>Example</Button>
        <Button as={Link} href="/not-working">
          Go to Not Working
        </Button>
        <Button as="a" href="/working">
          Hard Refresh
        </Button>
      </Stack>
    </Container>
  );
}
