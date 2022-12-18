---
id: gaster-overview
title: Overview of the Tunnel
---

# Wind Tunnel Layout

Shown below is the control and instrumentation for the Gaster tunnel. Visible is the three-axis hot-wire traverse, the data acquisition hardware, and the additional instrumentation and measurement hardware such as filters and oscilloscopes.

<!-- <figure> -->
![Tunnel Layout](https://picsum.photos/600/400)
<!-- <figurecaption>Gaster Tunnel Layout Overview</figurecaption> -->
<!-- </figure> -->

The traverse controller houses the necessary hardware to drive the traverse, with control being carried out through an *NI UMI 7774* motor controller, connected to the PC through an *NI PXI-7350* card housed in an *NI PXI 1033* chassis.

The *NI PXI 1033* chassis also houses the card required for data acquisition. The hardware and connection layout can be seen in the figure below. Control of the wind tunnel fan is communicated through a serial USB interface to the wind tunnel controller.

<!-- <figure> -->
![Hardware and Connection Layout](https://picsum.photos/800/300)
<!-- <figurecaption>Gaster Tunnel hardware and instrumentation connection layout</figurecaption> -->
<!-- </figure> -->

# Connections
For the control system to operate all functions correctly, it is important to ensure that any and all hardware is connected through the correct channels. These channels are highlighted below.

```mermaid
    flowchart LR
        subgraph wt[Wind Tunnel]
        A[USB/RS 232] --> B[RS 232 to 422]
        B --> C[RS 323 Port] --> D[WT Controller] --> E[WT Motor]
        end

        PC[fa:fa-computer PC] -->|USB| A

        subgraph 1033[NI PXI-1033]
        PXI-7350
        PXI-6143
        PXI-6723
        PXI-6624
        end

        1033 <--> PC

        subgraph Data Acquisition
        BNC-2111 <--> PXI-6624
        BNC-2115 <--> PXI-6723
        BNC-2120 <--> PXI-6143
        end

        subgraph Traverse Control
        tc[NI UMI-7774]
        tb[Traverse Box]
        tm[Traverse XYZ Motors]
        end

        PXI-7350 --> tc
        tc --> tb
        tb --> tm

        PC -->|Power| B
```