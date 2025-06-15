import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import theme from "../theme";
import C3Assistant from "./views/C3Assistant";

interface C3AssistantSidebarProps {
  sidebarOpen: boolean;
  sidebarDelayInSeconds: number;
  agentAssistantKey: number;
}

const C3AssistantSidebar: React.FC<C3AssistantSidebarProps> = ({
  sidebarOpen,
  sidebarDelayInSeconds,
  agentAssistantKey,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleComponentUpdate = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [agentAssistantKey, sidebarOpen]);

  return (
    <Box
      ref={scrollRef}
      sx={{
        background: theme.palette.background.default,
        border: `1px solid ${theme.palette.primary.main}`,
        position: "absolute",
        right: "0px",
        width: "400px",
        height: "calc(100% - 58px)", // component height is 48px and margin bottom is 10px
        transition: `transform ${sidebarDelayInSeconds}s ease-in-out`,
        transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
        zIndex: 1300,
        overflowY: "auto",
      }}
    >
      <C3Assistant
        key={agentAssistantKey}
        sidebarDelayInSeconds={sidebarDelayInSeconds}
        onComponentUpdate={handleComponentUpdate}
      />
    </Box>
  );
};

export default C3AssistantSidebar;
