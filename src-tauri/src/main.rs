#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// fn main() -> wry::Result<()> {
//     use wry::{
//         application::{
//             event::{Event, StartCause, WindowEvent},
//             event_loop::{ControlFlow, EventLoop},
//             window::WindowBuilder,
//         },
//         webview::WebViewBuilder,
//     };

//     let event_loop = EventLoop::new();
//     let window = WindowBuilder::new()
//         .with_title("Flam Drumming")
//         .build(&event_loop)?;
//     let _webview = WebViewBuilder::new(window)?
//         .with_url("https://web.telegram.org/")?
//         .build()?;

//     event_loop.run(move |event, _, control_flow| {
//         *control_flow = ControlFlow::Wait;

//         match event {
//             Event::NewEvents(StartCause::Init) => println!("Wry has started!"),
//             Event::WindowEvent {
//                 event: WindowEvent::CloseRequested,
//                 ..
//             } => *control_flow = ControlFlow::Exit,
//             _ => (),
//         }
//     });
// }
