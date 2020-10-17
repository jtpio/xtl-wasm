# xtl-wasm

A subset of the [`xtl`](https://github.com/xtensor-stack/xtl) library compiled to WebAssembly.

List of currently supported functions:

- `xhash/murmur2_x86`

## Status

**This is still an experiment 🧪 ⚡**

**Demo**: https://xtl-wasm.now.sh/

## Installation

This package has not been published yet.

## Dev Setup

```bash
conda create -n xtl-wasm -c conda-forge python=3 cmake openjdk xtl yarn -y

# Get the emsdk repo
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk/

# Download and install the latest SDK tools.
./emsdk install latest

# Make the "latest" SDK "active" for the current user. (writes .emscripten file)
./emsdk activate latest

# source the env file
source ./emsk_env.sh

export CPLUS_INCLUDE_PATH=${CONDA_PREFIX}/include

yarn run build:xtl
```

This will generate the WASM and JS files in the `public/dist/` folder.

To build the demo web app:

```bash
yarn run build
```

Then start a local server with:

```bash
yarn run start
```

This will open a new tab in the web browser with the demo app.
