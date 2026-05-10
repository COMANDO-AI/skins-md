### Section 1 · metadata
name:          Brutalist
author:        COMANDO
version:       2.0.0
tags:          brutalist, raw, editorial, bold, black-white, winamp
description:   No decoration. No apology. Pure function. Now with texture.
preview_url:   none
license:       MIT

### Section 2 · palette
bg:            #ffffff
fg:            #000000
accent:        #ff0000
muted:         #555555
surface:       #f0f0f0
border:        #000000
error:         #ff0000
success:       #00aa00

### Section 3 · typography
font_sans:     Courier Prime
font_mono:     Courier Prime
font_display:  Space Grotesk
size_base:     16px
weight_base:   700
line_height:   1.5
letter_spacing: 0.04em
text_transform: uppercase
weight_display: 900

### Section 4 · layout
radius:        0px
spacing_unit:  8px
max_width:     760px
sidebar_width: 280px
radius_message: 0px
radius_input:   0px
radius_ui:      0px
message_shape:  sharp
border_style:   solid

### Section 5 · voice
send_label:    SEND
placeholder:   TYPE HERE
empty_state:   READY.
thinking_label: PROCESSING
clear_label:   DELETE

### Section 6 · atmosphere
bg_effect:         none
animation_speed:   none
blur:              none
texture_overlay:   paper
texture_intensity: subtle
surface_style:     flat
motion_style:      snap
thinking_style:    blink

### Section 7 · components
message_user_bg:       #000000
message_user_fg:       #ffffff
message_assistant_bg:  #f0f0f0
message_assistant_fg:  #000000
input_border:          #000000

### Section 9 · custom
.msg-bubble-user {
  border: 3px solid #000000;
  box-shadow: 4px 4px 0 #000000;
}
.msg-bubble-assistant {
  border: 2px solid #000000;
}
.thinking-indicator {
  font-weight: 900;
  letter-spacing: 0.1em;
}
