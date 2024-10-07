"use client";

import { CalendarIcon } from "@chakra-ui/icons";
import { Button, Container, Stack } from "@chakra-ui/react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Container py="10">
      <Stack>
        <Button leftIcon={<CalendarIcon />}>Example</Button>
        <Button as={Link} href="/working">
          Go to Working
        </Button>
        <Button as="a" href="/not-working">
          Hard Refresh
        </Button>
      </Stack>
    </Container>
  );
}
