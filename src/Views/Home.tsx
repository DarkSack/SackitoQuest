import { Grid } from "@mantine/core";
import React from "react";
import { Dropdown } from "keep-react";
import { CaretRight, DiscordLogo, SignIn, TwitchLogo } from "phosphor-react";
import { useUserAuth } from "../context/AuthContext";

export const Home: React.FC = () => {
  const { signInWithDiscord, signInWithTwitch } = useUserAuth();
  return (
    <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
      <Grid.Col span={1}>
        <Dropdown
          label={<SignIn />}
          type="primary"
          size="sm"
          arrowIcon={false}
          dismissOnClick={true}
          className="ml-2 mt-2"
        >
          <Dropdown.Item
            onClick={signInWithTwitch}
            icon={<TwitchLogo size={20} color="#5E718D" />}
          >
            Twitch
            <span className="ml-auto">
              <CaretRight size={20} color="#5E718D" />
            </span>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={signInWithDiscord}
            icon={<DiscordLogo size={20} color="#5E718D" />}
          >
            Discord
            <span className="ml-auto">
              <CaretRight size={20} color="#5E718D" />
            </span>
          </Dropdown.Item>
        </Dropdown>
      </Grid.Col>
    </Grid>
  );
};
